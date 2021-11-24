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
    setSearchQuery(searchData);
  };

  const searchImages = e => {
    setLoading(true);
    setImages([]);
    setPage(1);
    setTimeout(() => {
      ImagesApi.ImagesFetch(searchQuery, page)
        .then(results => {
          if (results.length === 0) {
            toast.error(
              `No results were found for your query - "${searchQuery}"!`,
            );
            return;
          }
          setImages(results);
          setPage(page + 1);
          return;
        })
        .catch(error => setError(error))
        .finally(setLoading(false));
    }, 500);
  };

  const loadMoreImages = e => {
    setPage(page + 1);

    ImagesApi.ImagesFetch(searchQuery, page)
      .then(results => setImages(prev => [...prev, ...results]))
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
        <SearchBar onSubmit={handleSearchFormSubmit} onClick={searchImages} />
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
          <Button onClickButton={loadMoreImages} />
        )}
        {modalImage && (
          <Modal onClose={closeModal} largeImage={modalImage} alt={modalAlt} />
        )}
        <ToastContainer />
      </div>
    </>
  );
}
