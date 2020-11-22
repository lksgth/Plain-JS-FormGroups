# Plain JS FormGroups
> FormGroups are very useful for structuring and managing HTML inputs.
> This rep includes the base structure and functionality for creating plain JS FormGroups. It is inspired by Angular.

## How to use FormGroups
HTML Input Fields are wrapped by FormControls, which are nested in FormGroups.

1. Create a form group:
```javascript
const form_group = new FormGroup();  
```    
2. Add some controls:
```javascript
form_group.add_control("name", ["required"]);
// -> validators are optional
form_group.add_control("surname");
```

## Next steps
- Build a Validator class like it exists in Angular: https://angular.io/api/forms/Validators.
- Add more HTML selectors to add_control()
