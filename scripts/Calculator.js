let sum = '';
        let isResultShown = false;

        function appendToSum(value) {
            if (isResultShown) {
                sum = '';
                isResultShown = false;
            }
            sum += value;
            showCalculations(sum);
        }

        function calculateResult() {
            try {
                const processedSum = sum.replace(/\^/g, "**");
                sum = eval(processedSum);
                showCalculations(sum);
                isResultShown = true;
            } catch (error) {
                alert('Invalid Expression');
                clearInput();
            }
        }

        function clearInput() {
            sum = '';
            isResultShown = false;
            showCalculations(sum);
        }

        function showCalculations(num) {
            document.querySelector('.input-box').value = num;
        }