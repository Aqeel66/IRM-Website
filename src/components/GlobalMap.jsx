import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Fix for default marker icons in React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const GlobalMap = () => {
  const { t } = useTranslation();
  
  const projects = [
    { id: 1, name: t('map.projects.london'), coords: [51.505, -0.09], country: t('map.projects.uk'), image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&h=200&fit=crop' },
    { id: 2, name: t('map.projects.dubai'), coords: [25.2048, 55.2708], country: t('map.projects.uae'), image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=300&h=200&fit=crop' },
    { id: 3, name: t('map.projects.newyork'), coords: [40.7128, -74.006], country: t('map.projects.usa'), image: 'https://images.unsplash.com/photo-1496871455396-14e56815f1f4?q=80&w=300&h=200&fit=crop' },
    { id: 4, name: t('map.projects.singapore'), coords: [1.3521, 103.8198], country: t('map.projects.singapore'), image: 'https://images.unsplash.com/photo-1525625232717-12192dd10041?q=80&w=300&h=200&fit=crop' },
    { id: 5, name: t('map.projects.freetown'), coords: [8.4844, -13.2344], country: t('map.projects.sierra_leone'), image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=300&h=200&fit=crop' },
  ];

  return (
    <section className="py-24 bg-brand-ash" id="verticals">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-12">
            <span className="text-brand-primary font-semibold tracking-widest text-[11px] uppercase mb-4 block">
              {t('map.badge')}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-brand-deep mb-4 leading-tight">
              {t('map.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-[13px] leading-relaxed">
              {t('map.subtitle')}
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {projects.map((project) => (
              <Marker key={project.id} position={project.coords}>
                <Popup className="custom-popup">
                  <div className="w-48 overflow-hidden rounded-lg">
                    <img src={project.image} alt={project.name} className="w-full h-24 object-cover mb-2" />
                    <h3 className="font-bold text-brand-deep leading-tight text-[11px]">{project.name}</h3>
                    <p className="text-[10px] text-slate-500 mb-2">{project.country}</p>
                    <button className="text-[10px] text-brand-primary font-semibold hover:underline">
                      {t('map.viewDetails')} →
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
