import React, { memo } from "react";
import "./map.css";

export const Map = memo(() => {
  const konumSorgula = () => {
    document.getElementById("durum_mesaj").innerHTML = `Konum sorgulanıyor...`;
    navigator.geolocation.getCurrentPosition(oldu, olmadi);
  };

  const oldu = (pos) => {
    document.getElementById("enlem").innerHTML = pos.coords.latitude;
    document.getElementById("boylam").innerHTML = pos.coords.longitude;
    document.getElementById(
      "dogruluk"
    ).innerHTML = `${pos.coords.accuracy} metre`;

    document.getElementById("durum_mesaj").innerHTML = `Konum sonucu bulundu`;

    const mapembed = `https://www.google.com/maps?output=embed&z=15&q=${pos.coords.latitude},${pos.coords.longitude}`;
    console.log(mapembed);

    document.getElementById("harita").setAttribute("src", mapembed);

    console.log(pos);
  };

  function olmadi(hata) {
    document.getElementById("durum_mesaj").innerHTML = `
    <strong>Hata Kodu</strong> ${hata.code} <br>
    <strong>Hata mesajı</strong> ${hata.message}
    `;

    console.log(hata);
  }

  //console.log(navigator);

  return (
    <div className="map">
      <h1>HTML ile konum bilgisi sorgulama</h1>

      <div className="esas">
        <p>
          <strong>Enlem:</strong> <span id="enlem">-</span>
        </p>
        <p>
          <strong>Boylam:</strong> <span id="boylam">-</span>
        </p>
        <p>
          <strong>Doğruluk:</strong> <span id="dogruluk">-</span>
        </p>

        <iframe
          id="harita"
          title="cordinate"
          src="https://www.google.com/maps?output=embed&q=Türkiye"
          width="100%"
          height="450"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>

        <button onClick={konumSorgula} autoFocus>
          Konumu bul
        </button>
      </div>

      <div className="kutucuk">
        <p id="durum_mesaj">Beklemede</p>
      </div>
    </div>
  );
});
