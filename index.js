let widths = ["10%", "20%", "30%", "40%", "50%", "100%"];
        let index = 0;

        // Animate the width
        setInterval(() => {
            document.getElementById("line").style.width = widths[index];
            index = (index + 1) % widths.length; // loop back to start
        }, 500);

        // Change the color based on dropdown selection
        function changeColor() {
            let selectedColor = document.getElementById("colorSelect").value;
            document.getElementById("line").style.backgroundColor = selectedColor;
        }