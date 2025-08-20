function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">Adresse</h3>
          <p>LOT II C 27 Ter,<br />Ampandrana OUEST<br />ANTANANARIVO 101</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Téléphone : <a id="contact" href="tel:+261381622069" className="hover:underline">+261 34 15 342 19</a></p>
          <p>Email : <a href="mailto:mutualaidfoundation2025@gmail.com" className="hover:underline">mutualaidfoundation2025@gmail.com</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Informations légales</h3>
          <p>Numéro d'immatriculation :</p>
          <p>1476/25-MI/SG/PREF.POL.ANT/ASS</p>
          <p className="mt-2">
            Facebook :{" "}
            <a
              href="https://www.facebook.com/share/1AuLk3Nsf6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Mutual Aid Foundation
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Mutual Aid Foundation. Tous droits réservés.
      </div>
    </footer></>
  );
}

export default Footer;
