import { useEffect, useState } from "react";
import {
  useEditRentMutation,
  useGetRentByIdQuery,
} from "../../../Redux/rent/rentApi";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetRentByIdQuery(id);
  const rent = data?.data;

  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState(rent?.features || []);

  useEffect(() => {
    setFeatures(rent?.features);
  }, [rent]);

  const [editRent, { isLoading }] = useEditRentMutation();

  const handleEditRent = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const time = form.time.value;
    const company = form.company.value;
    const size = form.size.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const pressure = form.pressure.value;
    const backup = form.backup.value;

    const rentInfo = {
      title,
      price,
      time,
      company,
      size,
      height,
      weight,
      pressure,
      backup,
      features,
    };

    const res = await editRent({ id, rentInfo });
    if (res?.data?.success) {
      Swal.fire("", "Rent edit success", "success");
      form.reset();
      navigate("/admin/rental/all");
      setFeatures([]);
    } else {
      Swal.fire("", "something went wront", "error");
    }
  };

  return (
    <section>
      <div className="bg-base-100rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Rental</h2>

        <form onSubmit={handleEditRent} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                required
                defaultValue={rent?.title}
              />
            </div>
            <div>
              <p className="mb-1">Price</p>
              <input
                type="number"
                name="price"
                required
                defaultValue={rent?.price}
              />
            </div>
            <div>
              <p className="mb-1">Rent Time</p>
              <input
                type="text"
                name="time"
                required
                placeholder="30 days"
                defaultValue={rent?.time}
              />
            </div>
            <div>
              <p className="mb-1">Company Name</p>
              <input
                type="text"
                name="company"
                required
                defaultValue={rent?.company}
              />
            </div>
            <div>
              <p className="mb-1">Size</p>
              <input
                type="text"
                name="size"
                required
                defaultValue={rent?.size}
              />
            </div>
            <div>
              <p className="mb-1">Height</p>
              <input
                type="text"
                name="height"
                required
                defaultValue={rent?.height}
              />
            </div>
            <div>
              <p className="mb-1">Weight</p>
              <input
                type="text"
                name="weight"
                required
                defaultValue={rent?.weight}
              />
            </div>
            <div>
              <p className="mb-1">Pressure</p>
              <input
                type="text"
                name="pressure"
                required
                placeholder="2000 Litters+"
                defaultValue={rent?.pressure}
              />
            </div>
            <div>
              <p className="mb-1">Backup</p>
              <input
                type="text"
                name="backup"
                required
                placeholder="Par min 2 liter 12 hours"
                defaultValue={rent?.backup}
              />
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
                className="secondary_btn cursor-pointer"
                onClick={() => {
                  setFeatures([...features, feature]);
                  setFeature("");
                }}
              >
                +
              </div>
            </div>

            <ul className="mt-4 list-disc list-inside">
              {features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Edit Rent"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
