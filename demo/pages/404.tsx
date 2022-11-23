import React from 'react';

export default function ErrorPage({ ...rest }) {
  return (
    <div
      className={`w-full h-screen flex mt-0 items-center justify-center bg-bg-main`}
    >
      <div className="text-white">
        <h4 className="uppercase text-2xl md:text-3xl font-primary font-bold mb-5">
          404
        </h4>
        <p className="text-sm md:text-base mb-3">Page not found :(</p>
        <p className="text-sm md:text-base mb-3">
          Ooooups! Looks like you got lost.
        </p>
      </div>
    </div>
  );
}
