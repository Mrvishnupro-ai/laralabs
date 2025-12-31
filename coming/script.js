document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notifyForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');

    // Button States
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.loader');
    const success = submitBtn.querySelector('.success');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const scriptURL = "https://script.google.com/macros/s/AKfycbyWRoZ3d8ZxmhFm9kXiauVmnrzcr_9eCutxFmIME6EWIdDhbKpkHwgBblALjexa59VzmQ/exec";

        // Set Loading State
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('email', email);

            // Send standard POST request
            // mode: 'no-cors' needed for Google Scripts usually unless configured otherwise.
            // But usually for fetch to Google Script, simple no-cors works but we can't read response.
            // So we just assume success if it doesn't throw network error.
            await fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            // Set Success State
            setSuccess();
            emailInput.value = "";

        } catch (error) {
            console.error("Error submitting email:", error);
            alert("Something went wrong. Please try again.");
            setLoading(false);
        }
    });

    function setLoading(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            emailInput.disabled = true;

            btnText.classList.add('hidden');
            success.classList.add('hidden');
            loader.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            emailInput.disabled = false;

            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
        }
    }

    function setSuccess() {
        submitBtn.classList.add('submitted');

        loader.classList.add('hidden');
        btnText.classList.add('hidden');
        success.classList.remove('hidden');

        // We keep it disabled and in success state as per the design intent
        // "Joined!" stays visible
    }
});
