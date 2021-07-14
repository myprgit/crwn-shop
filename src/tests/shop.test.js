import { getFourRandom } from "../components/Shop/Shop.component";
import data from "../data/home.data";

function checkIfArrayIsUnique(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length; j++) {
            if (i != j) {
                if (myArray[i] == myArray[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}
//foreach - map - filter - find

describe("Shop page item tests",()=>{
    it('Get exactly 4 items', () => {
        expect(getFourRandom(data).length).toEqual(4);
    });
    
    it('Get non-duplicate elements',() => {
        expect(checkIfArrayIsUnique(getFourRandom(data))).toBe(true)
    });
});

