const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
];

const createInput = (arr) => {

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', arr.name);
  input.setAttribute('id', arr.name);
  input.className = 'input';
  
  return input
}

const createSelect = (arr) => {
  
  const select = document.createElement('select');
  select.setAttribute('id', arr.name);
  select.setAttribute('name', arr.name);
  select.className = 'select'

  arr.options.forEach((opt) => {
    const option = new Option(opt.text, opt.value);

    select.append(option)
  })

  return select
}

const createButton = () => {
  const button = document.createElement('button');

  button.setAttribute('id', 'button');
  button.setAttribute('type', 'submit');
  button.innerText = 'Отправить';

  button.className = 'button';

  return button
};

const convertFormDataToObject = (obj) => {
  const objValues = {};

  for (let pair of obj.entries()) {
    objValues[pair[0]] = pair[1];
  };

  return objValues;
};

const handleForm = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const values = convertFormDataToObject(formData);

  console.log (values)

  return values
}

const createForm = (arrForm) => {
 

  const form = document.createElement('form');
  form.className = 'form';
  const button = createButton();

  arrForm.forEach((item) => {
    const div = document.createElement('div');
    const label= document.createElement('label');
    label.setAttribute('for', item.name);
    label.innerText = item.label;
  
    div.className = 'wrapper';
    label.className = 'input-label';

    if (item.element === 'text') {
      const input = createInput (item);

      div.append(label);
      div.append(input)

    } else if (item.element === 'select'){
      const select = createSelect (item);

      div.append(label);
      div.append(select)
    }

    form.append(div)
  })

  
  form.append(button)

  document.body.append(form);
  console.log(form)
  return form
}

let form = createForm(formConfig)

form.addEventListener("submit", handleForm);