import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix marker icon issue */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Project Locations */
const locations = [
  { name: "Gujarat Project", coords: [22.2587, 71.1924] },
  { name: "Visakhapatnam Project", coords: [17.6868, 83.2185] },
  { name: "Bina Project (M.P.)", coords: [24.2050, 78.2020] },
];

export const IndiaMapSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Live Project Locations Across India
          </h2>
          <p className="text-muted-foreground">
            Our operational footprint across key project sites.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg h-[600px]">
          <MapContainer
            center={[22.9734, 78.6569]} // India center
            zoom={5}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            {/* Street Map Tiles */}
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Project Pins */}
            {locations.map((loc, i) => (
              <Marker key={i} position={loc.coords as [number, number]}>
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  Electrical Infrastructure Project
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
