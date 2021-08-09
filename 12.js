// Создать класс, описывающий абстрактное животное, который будет иметь от 3 до 5 методов.
// Класс должен иметь минимум 3 класса-наследника, в которых методы суперкласса должны быть переопределены,
// а также классы наследники должны быть расширены как минимум 1 новым методом, уникальным для данного подкласса.

class Animal {
  constructor(name, region) {
    this._name = name;
    this._region = region;
  }

  get name() {
    return this._name;
  }

  get region() {
    return this._region;
  }

  fullData() {
    return `The animal ${this._name} from ${this._region}.`;
  }
}

class Cat extends Animal {
  get name() {
    return `${this._name} is a cat`;
  }

  get region() {
    return `${this._region} is ${this._name}'s birthplace (cat)`;
  }

  fullData() {
    return `The cat ${this._name} from ${this._region}.`;
  }

  catInfo(weight) {
    return `${this._name}: ${weight} kg`;
  }
}

class Dog extends Animal {
  get name() {
    return `${this._name} is a dog`;
  }

  get region() {
    return `${this._region} is ${this._name}'s birthplace (dog)`;
  }

  fullData() {
    return `The dog ${this._name} from ${this._region}.`;
  }

  dogInfo(weight) {
    return `${this._name}: ${weight} kg`;
  }
}

class Elephant extends Animal {
  get name() {
    return `${this._name} is an elephant`;
  }

  get region() {
    return `${this._region} is ${this._name}'s birthplace (elephant)`;
  }

  fullData() {
    return `The elephant ${this._name} from ${this._region}.`;
  }

  elephantInfo(weight) {
    return `${this._name}: ${weight} kg`;
  }
}
