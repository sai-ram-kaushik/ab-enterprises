import React from "react";

const Gallery = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 md:px-10 py-5">
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/1.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/2.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/3.svg"
            alt=""
          />
        </div>
      </div>

      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/4.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/5.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/6.svg"
            alt=""
          />
        </div>
      </div>

      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/7.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/8.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/9.svg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/10.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/11.svg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/gallery/12.svg"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
