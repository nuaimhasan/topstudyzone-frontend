export default function Profile() {
  const handleEdit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const info = {
      name,
      email,
      phone,
    };

    console.log(info);

    // try {
    //   const res = await updateAdminProfile({ id, info }).unwrap();

    //   if (res?.success) {
    //     Swal.fire("", "Profile update success", "success");
    //     setTimeout(() => {
    //       location.reload();
    //     }, 1000);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   Swal.fire(
    //     "",
    //     error?.data?.error ? error?.data?.error : "Something went wrong",
    //     "error"
    //   );
    // }
  };

  return (
    <>
      <section className="bg-base-100 shadow rounded pb-4">
        <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
          <h3>My Profile</h3>
        </div>

        <div className="p-4 border md:w-2/3 mx-auto mt-4 rounded">
          <form
            onSubmit={handleEdit}
            className="form_group flex flex-col gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-content text-sm">Full Name</p>
                <input type="text" name="name" required />
              </div>
              <div>
                <p className="text-neutral-content text-sm">Email</p>
                <input type="email" name="email" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-content text-sm">Phone</p>
                <input type="text" name="phone" required />
              </div>

              <div>
                <p className="text-neutral-content text-sm">Role</p>
                <input type="text" disabled />
              </div>
            </div>

            <div>
              {/* <button
                disabled={isLoading && "disabled"}
                className="primary_btn my-4"
              >
                {isLoading ? "Loading..." : "Update Profile"}
              </button> */}
              <button className="primary_btn">Update Profile</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
