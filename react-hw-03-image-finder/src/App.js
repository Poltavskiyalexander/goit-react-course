import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import PiaxabayApi from './Services/PixabayApi';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Loader from 'react-loader-spinner';
import Button from './components/Button';
import ImageBox from './components/ImageBox';
import './style.css';

class App extends Component {
  state = {
    searchQwery: '',
    img: [],
    page: 1,
    modalIsOpen: false,
    currentIndex: null,
    isLoad: false,
  };

  getImg = data => {
    
    this.setState({ isLoad: true });
    PiaxabayApi.getPicture(data, this.state.page)
      .then(images =>
        this.setState(prevState => ({
          searchQwery: data,
          img: [...prevState.img, ...images],
          page: prevState.page + 1,
        })),
      )
      .finally(this.setState({ isLoad: false }));
  };
  serchSubmit = data => {
    this.setState({img: []});
    this.getImg(data);
  };
  clickHandler = () => {
    this.getImg(this.state.searchQwery);
  };
  imageClickHendler = index => {
    this.setState({ modalIsOpen: true, currentIndex: index });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, currentIndex: null });
  };

  render() {
    const { img, searchQwery, currentIndex } = this.state;
    return (
      <>
        <div>{searchQwery}</div>
        <Searchbar onSubmit={this.serchSubmit} />
        <ImageGallery imageClickHendler={this.imageClickHendler} images={img} />
        {this.state.isLoad && (
          <Loader type="Hearts" color="#00BFFF" height={200} width={200} />
        )}
        {!!img.length && <Button clickHandler={this.clickHandler} />}

        {this.state.modalIsOpen && (
          <Modal closeModal={this.closeModal}>
            <ImageBox
              image={img[currentIndex].largeImageURL}
              descriptions={img[currentIndex].tags}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
