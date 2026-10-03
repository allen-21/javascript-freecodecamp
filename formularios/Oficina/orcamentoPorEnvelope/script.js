
const form = document.getElementById("form");

function validateForm() {
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const orderNo = document.getElementById("order-no");
    const productCode = document.getElementById("product-code");
    const quantity = document.getElementById("quantity");

    const complaintCheckboxes = document.querySelectorAll(
        '#complaints-group input[type="checkbox"]'
    );

    const otherComplaint = document.getElementById("other-complaint");
    const complaintDescription = document.getElementById(
        "complaint-description"
    );

    const solutionRadios = document.querySelectorAll(
        '#solutions-group input[type="radio"]'
    );

    const otherSolution = document.getElementById("other-solution");
    const solutionDescription = document.getElementById(
        "solution-description"
    );

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const orderPattern = /^2024\d{6}$/;
    const productPattern = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

    const complaintsValid = Array.from(complaintCheckboxes).some(
        checkbox => checkbox.checked
    );

    const solutionsValid = Array.from(solutionRadios).some(
        radio => radio.checked
    );

    const complaintDescriptionValid =
        !otherComplaint.checked ||
        complaintDescription.value.length >= 20;

    const solutionDescriptionValid =
        !otherSolution.checked ||
        solutionDescription.value.length >= 20;

    return {
        "full-name":
            fullName.value.trim().length > 0,

        "email":
            email.value.trim().length > 0 &&
            emailPattern.test(email.value.trim()),

        "order-no":
            orderPattern.test(orderNo.value),

        "product-code":
            productPattern.test(productCode.value),

        "quantity":
            /^\d+$/.test(quantity.value) &&
            Number(quantity.value) > 0,

        "complaints-group":
            complaintsValid,

        "complaint-description":
            complaintDescriptionValid,

        "solutions-group":
            solutionsValid,

        "solution-description":
            solutionDescriptionValid
    };
}

function isValid(validationResults) {
    if (!validationResults || typeof validationResults !== "object") {
        return false;
    }

    return Object.values(validationResults).every(
        value => value === true
    );
}

function setBorder(element, valid) {
    element.style.borderColor = valid ? "green" : "red";
}

form.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("change", function () {
        const results = validateForm();

        switch (field.id) {
            case "full-name":
                setBorder(field, results["full-name"]);
                break;

            case "email":
                setBorder(field, results["email"]);
                break;

            case "order-no":
                setBorder(field, results["order-no"]);
                break;

            case "product-code":
                setBorder(field, results["product-code"]);
                break;

            case "quantity":
                setBorder(field, results["quantity"]);
                break;

            case "complaint-description":
                setBorder(
                    field,
                    results["complaint-description"]
                );
                break;

            case "solution-description":
                setBorder(
                    field,
                    results["solution-description"]
                );
                break;
        }

        if (field.closest("#complaints-group")) {
            setBorder(
                document.getElementById("complaints-group"),
                results["complaints-group"]
            );
        }

        if (field.closest("#solutions-group")) {
            setBorder(
                document.getElementById("solutions-group"),
                results["solutions-group"]
            );
        }
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validationResults = validateForm();

    if (!isValid(validationResults)) {
        document.getElementById("full-name").style.borderColor =
            validationResults["full-name"] ? "" : "red";

        document.getElementById("email").style.borderColor =
            validationResults["email"] ? "" : "red";

        document.getElementById("order-no").style.borderColor =
            validationResults["order-no"] ? "" : "red";

        document.getElementById("product-code").style.borderColor =
            validationResults["product-code"] ? "" : "red";

        document.getElementById("quantity").style.borderColor =
            validationResults["quantity"] ? "" : "red";

        document.getElementById("complaints-group").style.borderColor =
            validationResults["complaints-group"] ? "" : "red";

        document.getElementById("complaint-description").style.borderColor =
            validationResults["complaint-description"] ? "" : "red";

        document.getElementById("solutions-group").style.borderColor =
            validationResults["solutions-group"] ? "" : "red";

        document.getElementById("solution-description").style.borderColor =
            validationResults["solution-description"] ? "" : "red";
    }
});
