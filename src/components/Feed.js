import React, { Component } from "react";
import Image from "./Image";
import List from "./List";

export default class Feed extends Component {
  render() {
    return (
      <div>
        <div className="photo-grid">
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.dhresource.com/600x600/f2/albu/g6/M00/36/5D/rBVaR1tzlBCAW1sOAAVsE4jBAUc207.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
          <Image src="https://www.nocturnar.com/imagenes/animales/los-perros-mas-bonitos-del-mundo-30-fotos-01-32.jpg"></Image>
        </div>
        <div>
          <List />
        </div>
      </div>
    );
  }
}
