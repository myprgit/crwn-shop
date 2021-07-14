import { render, queryByAttribute, fireEvent, getByRole, screen } from "@testing-library/react";
import Signin from "../components/Signin/Signin.component"
import '@testing-library/jest-dom';
import { auth, createUserProfileDoc } from "../firebase/firebase";

const submitHandler = async (email, password) => {
    let res = "";
    try {
        await auth.signInWithEmailAndPassword(email, password);
        res = true;
    } catch (e) {
        res = e.message;
    }
    return res;
};


it('successful signin form submit', () => {
    const handle = jest.fn();
    render(<Signin onSubmitF={handle} />);
    const signin = screen.getByLabelText('signin');
    fireEvent.submit(signin);
    expect(handle).toHaveBeenCalled();
})

const cases = [["test@test.test", "test123", true], ["test@test", "test123", "There is no user record corresponding to this identifier. The user may have been deleted."], ["", "test123", "The email address is badly formatted."]];

describe("sucessfull signin", () => {
    //functional
    test.each(cases)(
        "given email: %p and pass: %p as arguments, should return %p",
        async (firstArg, secondArg, expectedResult) => {
            const result = await submitHandler(firstArg, secondArg);
            expect(result).toEqual(expectedResult);
        }
    );
});
