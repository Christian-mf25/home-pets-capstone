import { createGlobalStyle } from "styled-components";
import { Button, TextField, FormControl } from "@material-ui/core";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
	
	:root{
		--color-primary: #FBD10D;
		--color-primary-50: #FCE785;
		--color-secondary: #4D27D9;
		--color-secondary-50: #A592EB;
		--color-gray-100: #111111;
		--color-gray-50: #878787;
		--color-gray-20: #E0E0E0;
		--color-gray-0: #F5F5F5;
		--color-negative: #E60000;
		--color-warning: #FFCD07;
		--color-sucess: #168821;
		--color-information:#155BCB; 
	}
	
	html, body, main, div, section, li, ul, ol, span, header, h1, h2, h3, h4, h5, h6, p, a, button, form, input, img, figure, figcaption, label {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	} 
`;

export const PrimaryButton = styled(Button)`
  &.MuiButton-root {
    height: 50px;
    box-shadow: none !important;
    background-color: var(--color-secondary);
    color: #ffff;
    :hover {
      background-color: var(--color-secondary-50);
    }
  }
`;

export const SecondaryButton = styled(Button)`
  &.MuiButton-root {
    height: 50px;
    box-shadow: none !important;
    background-color: var(--color-gray-0);
    color: var(--color-gray-20);
    :hover {
      background-color: var(--color-gray-20);
      color: var(--color-gray-50);
    }
  }
`;

export const Input = styled(TextField)`
  & label.Mui-focused {
    color: var(--color-gray-50);
    box-sizing: border-box;
  }

  &.MuiTextField-root {
    background-color: var(--color-gray-0);
    color: var(--color-gray-50);
    border-radius: 5px;

    .MuiInput-underline:after {
      border: 2px solid var(--color-secondary);
    }

    fieldset {
      border: none;
    }

    &:hover fieldset {
      border: 1px solid var(--color-secondary);
    }

    .Mui-focused fieldset {
      border: solid 2px var(--color-secondary);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px var(--color-gray-0) inset;
      -webkit-text-fill-color: #000;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root
    .MuiOutlinedInput-notchedOutline {
    color: var(--color-gray-50);
    border-radius: 5px;
    border: none;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: var(--color-gray-0);
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .Mui-focused {
    border: solid 2px var(--color-secondary);
  }

  &.MuiFormControl-root {
    color: var(--color-gray-50);

    .Mui-focused fieldset {
      border: solid 2px var(--color-secondary);
    }

    &:hover fieldset {
      border: 1px solid var(--color-secondary);
    }

    & label.Mui-focused {
      color: var(--color-gray-50);
    }

    svg {
      color: var(--color-secondary);
      z-index: 1;
			font-size: 2.5rem;
    }
  }
`;

export const Password = styled(FormControl)`
  &.MuiFormControl-root {
    margin: 0;
    width: 100%;
    color: var(--color-gray-50);
    background-color: var(--color-gray-0);

    fieldset {
      border: none;
    }

    .Mui-focused fieldset {
      border: solid 2px var(--color-secondary);
    }

    &:hover fieldset {
      border: 1px solid var(--color-secondary);
    }

    & label.Mui-focused {
      color: var(--color-gray-50);
    }

    svg {
      color: var(--color-secondary);
      z-index: 1;
    }
  }
`;
