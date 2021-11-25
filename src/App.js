import React from 'react';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './components/Searchbar';
import ImageGallary from './components/ImageGallery';
import ImagesApi from './services-api/ImagesAPI';
import Button from './components/Button';
import Modal from './components/Modal';
import s from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  const handleSearchFormSubmit = searchData => {
    if (searchQuery === searchData) {
      return;
    }
    setSearchQuery('');
    setPage(1);
    setImages([]);
    setLoading(false);
    setSearchQuery(searchData);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    searchImages();
  }, [searchQuery, page]);

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  const searchImages = () => {
    setLoading(true);
    ImagesApi.ImagesFetch(searchQuery, page)
      .then(results => {
        if (results.length === 0) {
          toast.error(
            `No results were found for your query - "${searchQuery}"!`,
          );
          return;
        }
        setImages(prev => [...prev, ...results]);
        return;
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const closeModal = e => {
    setModalImage(null);
  };

  const openModal = (largeImage, alt) => {
    setModalImage(largeImage);
    setModalAlt(alt);
  };

  return (
    <>
      <div className={s.App}>
        <SearchBar onSubmit={handleSearchFormSubmit} />
        {error && <h1>Ошибка на сервере</h1>}
        {loading && (
          <Loader
            type="Oval"
            color="#3f51b5"
            height={80}
            width={80}
            className={s.Loader}
          />
        )}
        {images.length > 0 && (
          <ImageGallary images={images} onClick={openModal} />
        )}
        {images.length > 11 && !loading && (
          <Button onClickButton={loadMoreBtn} />
        )}
        {modalImage && (
          <Modal onClose={closeModal} largeImage={modalImage} alt={modalAlt} />
        )}
        <ToastContainer />
      </div>
    </>
  );
}
