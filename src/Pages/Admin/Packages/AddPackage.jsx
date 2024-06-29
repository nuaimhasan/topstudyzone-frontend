import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddPackage() {
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState([]);

  const handleDelete = (feature) => {
    const newFeatures = features.filter((f) => f !== feature);
    setFeatures(newFeatures);
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Package</h2>

        <form className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Title</p>
              <input type="text" name="title" required />
            </div>
            <div>
              <p className="mb-1">Price</p>
              <input type="number" name="price" required />
            </div>
            <div>
              <p className="mb-1">Discount(%)</p>
              <input type="number" name="time" required placeholder="0" />
            </div>
          </div>

          <div className="mt-4">
            <p>More Features</p>
            <div className="mt-2 sm:w-1/2 flex gap-2">
              <input
                type="text"
                name="feature"
                onChange={(e) => setFeature(e.target.value)}
                value={feature}
              />
              <div
                className="primary_btn cursor-pointer"
                onClick={() => {
                  if (feature !== "") {
                    setFeatures([...features, feature]);
                    setFeature("");
                  }
                }}
              >
                +
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-3">
              {features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"
                  />
                  <p>{feature}</p>
                  <div
                    onClick={() => handleDelete(feature)}
                    className="cursor-pointer"
                  >
                    <IoClose className="text-red-500" />
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button className="primary_btn">Add Package</button>
          </div>
        </form>
      </div>
    </section>
  );
}
