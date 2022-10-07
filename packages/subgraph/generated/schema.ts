// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Greeting extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Greeting entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Greeting must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Greeting", id.toString(), this);
    }
  }

  static load(id: string): Greeting | null {
    return changetype<Greeting | null>(store.get("Greeting", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get greetingID(): Bytes {
    let value = this.get("greetingID");
    return value!.toBytes();
  }

  set greetingID(value: Bytes) {
    this.set("greetingID", Value.fromBytes(value));
  }

  get ownerAddress(): Bytes {
    let value = this.get("ownerAddress");
    return value!.toBytes();
  }

  set ownerAddress(value: Bytes) {
    this.set("ownerAddress", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get age(): string | null {
    let value = this.get("age");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set age(value: string | null) {
    if (!value) {
      this.unset("age");
    } else {
      this.set("age", Value.fromString(<string>value));
    }
  }

  get country(): string | null {
    let value = this.get("country");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set country(value: string | null) {
    if (!value) {
      this.unset("country");
    } else {
      this.set("country", Value.fromString(<string>value));
    }
  }

  get crypto(): string | null {
    let value = this.get("crypto");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set crypto(value: string | null) {
    if (!value) {
      this.unset("crypto");
    } else {
      this.set("crypto", Value.fromString(<string>value));
    }
  }

  get message(): string | null {
    let value = this.get("message");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set message(value: string | null) {
    if (!value) {
      this.unset("message");
    } else {
      this.set("message", Value.fromString(<string>value));
    }
  }

  get imageURL(): string | null {
    let value = this.get("imageURL");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set imageURL(value: string | null) {
    if (!value) {
      this.unset("imageURL");
    } else {
      this.set("imageURL", Value.fromString(<string>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get totalRecieved(): BigInt {
    let value = this.get("totalRecieved");
    return value!.toBigInt();
  }

  set totalRecieved(value: BigInt) {
    this.set("totalRecieved", Value.fromBigInt(value));
  }
}
