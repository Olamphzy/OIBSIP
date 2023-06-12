let result;
        const converter = () => {
            let temp = document.getElementById('temp').value;
            console.log(temp);
            let tempselector = document.getElementById('select_temp');
            let n = tempselector.options.selectedIndex;
            let selectionis = tempselector.options[n].value;
            if (selectionis == 'Celcius') {
                result = ((temp * 1.8) + 32)
                document.getElementById('myresult').innerHTML = `  ${result.toFixed(3)}  Fahrenheit`
            }
            else {
                result = ((temp - 32) / 1.8);
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} Celcius`
            }

            const reset = document.querySelector('reset');
            const resetValue = () => {
            temp.value = '';
            result.innerHTML = '';
        }
        reset.addEventListener('click', resetValue)
        }
        