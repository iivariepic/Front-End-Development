class ZipValidator {

    static isZipValid(zipCode) {
        if (isNaN(zipCode)) {
            return false;
        }
        return zipCode.length === 5;
    }

    static isZipFixable(zipCode) {
        if (isNaN(zipCode)) {
            return false;
        }

        return zipCode.length <= 5;
    }

    static fixZip(zipCode) {
        if (zipCode.length > 5) {
            return;
        }
        return zipCode.padEnd(5, "0");
    }

}

let myZip = "03"
console.log("Is this zip valid? " + ZipValidator.isZipValid(myZip));
console.log("Is this zip fixable? " + ZipValidator.isZipFixable(myZip));
if (ZipValidator.isZipFixable(myZip)) {
    console.log("Fixing Zip");
    console.log("New zip code: " + ZipValidator.fixZip(myZip));
}