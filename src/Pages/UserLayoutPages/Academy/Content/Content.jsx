export default function Content() {
  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 shadow rounded overflow-hidden">
          <div className="bg-secondary text-base-100 text-center text-lg font-medium py-3">
            আমার পরিচয়
          </div>

          <div className="p-3">
            <img src="/src/assets/images/content.jfif" alt="" />
          </div>
        </div>
        <div className="bg-base-100 shadow rounded overflow-hidden"></div>
      </section>
    </div>
  );
}
