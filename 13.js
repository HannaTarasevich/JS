//Создать класс, реализающий шаблон Builder. Идея и реализация целиком на вашей стороне.

class Walls {
  constructor(material) {
    this.material = material;
  }
}

class Roof {
  constructor(material) {
    this.material = material;
  }
}

class Windows {
  constructor(material) {
    this.material = material;
  }
}

class Doors {
  constructor(material) {
    this.material = material;
  }
}

class Basis {
  constructor(height) {
    this.height = height;
  }
}

class Home {
  constructor() {
    this.walls = '';
    this.roof = '';
    this.windows = '';
    this.doors = '';
    this.basis = '';
  }
  static get builder() {
    return new HomeBuilder();
  }
}

class HomeBuilder {
  constructor() {
    this.home = new Home();
  }

  addWalls(material) {
    this.home.walls = material;
    return this;
  }

  addRoof(material) {
    this.home.roof = material;
    return this;
  }

  addWindows(material) {
    this.home.windows = material;
    return this;
  }

  addDoors(material) {
    this.home.doors = material;
    return this;
  }

  addBasis(height) {
    this.home.basis = height;
    return this;
  }

  build() {
    return this.home;
  }
}
