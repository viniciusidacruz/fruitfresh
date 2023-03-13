import { ListCollunComponent } from "./listComponent";

export const FooterComponent = () => {
  return (
    <footer className="bg-emerald-900">
      <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <ListCollunComponent />
      </div>
    </footer>
  );
};
