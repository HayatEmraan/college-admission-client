import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Client = () => {
    return (
      <div>
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
        <Toaster />
      </div>
    );
};

export default Client;