class FormControl {
  constructor(input_field_id, validators) {
    this._name = input_field_id;
    this._input_field_id = input_field_id;
    this._validators = validators;

    // set event listeners
    this.DOM_ELEMENT.addEventListener("keyup", (e) => {
      if (form_group)
        return form_group.controls
          .find(control => control.name === e.target.id)
          ._on_input_event(e);

      return null;
    });
    this.DOM_ELEMENT.addEventListener("focusout", (e) => {
      if (form_group)
        return form_group.controls
          .find(control => control.name === e.target.id)
          ._on_input_event(e);

      return null;
    });
  }

  _valid_input(value, validators) {
    let validator;

    for (let c = 0; c < validators.length; c++) {
      validator = validators[c];

      switch (validator) {
        case "required":
          if (!value || value.trim().length < 1)
            return false;

          break;
      }
    }

    return true;
  }

  _on_input_event(e) {
    // only validate if user has actually typed something in
    if (e.keyCode !== 9)
      if (this._valid_input(this.DOM_ELEMENT.value, this._validators))
        this.DOM_ELEMENT.classList.remove("invalid");
      else
        this.DOM_ELEMENT.classList.add("invalid");
  }

  get DOM_ELEMENT() {
    return document.getElementById(this._input_field_id);
  }

  get name() {
    return this._name;
  }
}

class FormGroup {
  constructor() {
    this.valid = true;
    this.controls = [];
    this.data = [];
  }

  _build_data() {
    const controls_names = Object.keys(this.controls);

    for (let i = 0; i < controls_names.length; i++) {
      this.data.push({
        control_name: controls_names[i],
        value: this.controls[i][0].value
      });
    }
  }

  add_control(input_field_id, validators = []) {
    if (input_field_id && validators)
      this.controls.push(new FormControl(input_field_id, validators));
    else
      throw "Unable to add control in cause of invalid or missing parameters!";
  }
}

const form_group = new FormGroup();

form_group.add_control("name", ["required"]);
// -> validators are optional
form_group.add_control("surname");