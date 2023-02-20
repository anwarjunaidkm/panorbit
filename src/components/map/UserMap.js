import React, { useEffect } from "react";

function UserMap({ selectedUser }) {
  // console.log("map====",selectedUser?.address?.geo?.lat);
  const Lat = +selectedUser?.address?.geo?.lat;
  const Lng = +selectedUser?.address?.geo?.lng;
  console.log("lat==", Lat, "Lng==", Lng);
  console.log(typeof Lat);
  console.log(typeof Lng);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      //-----just pass Lat Lng value heare maybe some issue map loading it just sample map not use google map Api
      // in case not pointed just pass direct value its working fine in my case----------------
      //   center: { lat:Lat, lng:Lng},
      center: { lat: -87.12, lng: 72.1 },
      zoom: 10,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 34.21, lng: 87.22 },
      map: map,
      title: "My Marker",
    });
  }, []);

  return (
    <>
      {" "}
      <div
        id="map"
        style={{
          height: "250px",
          width: "80%",
          borderRadius: "12px",
          margin: "10px",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h5 style={{ fontSize: "8px", color: "gray" }}>
          {" "}
          lat :<span style={{ fontWeight: "bold" }}>{Lat}</span> lng:{" "}
          <span style={{ fontWeight: "bold" }}>{Lng}</span>
        </h5>
      </div>
    </>
  );
}

export default UserMap;
