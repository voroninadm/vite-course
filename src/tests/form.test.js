import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {createForm} from '../pages/form/form.js';

describe('Тесты для формы', () => {
    let formElement;
    let form;
    let submitButton;
    let formInput;
    let itemList
    ;
    const root = document.createElement('div');
    root.setAttribute('id', 'root')

    beforeEach(() => {
        document.body.append(root);
        formElement = createForm();
        root.append(formElement);

        form = formElement.querySelector('.input-form');
        submitButton = formElement.querySelector('.submit-button');
        formInput = formElement.querySelector('.input-field');
        itemList = formElement.querySelector('.item-list');
    });

    afterEach(() => {
        root.removeChild(formElement);
    });


    it('Компонент отрисовывает форму с инпутом', () => {
        expect(root).toContain(formElement);
    });

    it('В компоненте должны быть форма, инпут, кнопка', () => {
        expect(formElement).toContain(form);
        expect(formElement).toContain(formInput);
        expect(formElement).toContain(submitButton);
    });

    it('Изначально инпут пустой', () => {
        expect(formInput.value).toBe('');
    });

    it('При нажатии на кнопку «Отправить» значение из инпута превращается в пункт списка.', () => {
        const inputValue = 'Test long string value';
        formInput.value = inputValue;
        form.dispatchEvent(new Event('submit'));

        expect(itemList.childElementCount).toBe(1);
        expect(itemList.firstChild.textContent).toBe(`${inputValue}`);
    });

    it('После появления пункта списка cам инпут очищается.', () => {
        formInput.value = 'Test long string value';
        submitButton.click(); // проверяем по нажатию на кнопку Submit

        expect(formInput.value).toBe('');
    });

    it('Нельзя добавить в список элемент, состоящий из одних пробелов.', () => {
        const inputValue = '          ';
        formInput.value = inputValue;
        submitButton.click();

        expect(itemList.innerHTML).not.toContain(`<li>${inputValue}</li>`);
    });

    it('Нельзя отправить пустую строку', () => {
        formInput.value = '';
        form.dispatchEvent(new Event('submit'));

        expect(itemList.childElementCount).toBe(0);
    });

    it('Значение инпута не должно быть меньше 2 символов.', () => {
        const inputValue = 'a';
        formInput.value = inputValue;
        submitButton.click();

        expect(itemList.innerHTML).not.toContain(`<li>${inputValue}</li>`);
    });

    it('Значение инпута не должно быть больше 25 символов.', () => {
        formInput.value = 'a'.repeat(26);
        submitButton.click();

        expect(itemList.childElementCount).toBe(0);
    });

    it('Колбек отправки вызываeтся', () => {
        const mockFn = vi.fn();
        form.addEventListener('submit', mockFn);

        form.dispatchEvent(new Event('submit'));
        expect(mockFn).toHaveBeenCalled();
    });

    it('Колбек отправки вызывается с аргументом event', () => {
        const mockFn = vi.fn();
        form.addEventListener('submit', mockFn);

        const event = new Event('submit');
        form.dispatchEvent(event);
        expect(mockFn).toHaveBeenCalledWith(event);
    });
});