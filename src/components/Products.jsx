function Products() {
  return (
    <div className="w-full bg-gray-300 py-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <h3 className="text-3xl font-bold text-center">
          Some image products created by AI
        </h3>

        <div className="w-full grid grid-cols-4 overflow-hidden gap-2">
          <img
            className="w-full h-auto object-contain"
            src="img_4.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_2.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_3.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_1.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_5.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_6.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_7.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_8.jpg"
            alt="image one"
          />

          <img
            className="w-full h-auto object-contain"
            src="img_9.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_10.jpg"
            alt="image one"
          />
          {/* <img
            className="w-full h-auto object-contain"
            src="img_11.jpg"
            alt="image one"
          />
          <img
            className="w-full h-auto object-contain"
            src="img_12x.jpg"
            alt="image one"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Products;
