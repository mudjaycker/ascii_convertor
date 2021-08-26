  // Begining of the main fonction
        document.querySelector("#myInput").addEventListener("input", function(event){
            event.preventDefault();
            let numvalue = event.target.value;
            //-----------------------------------------------------------

            //Sending data from form to backend through fectch_api
            let form = new FormData();
            form.append("numvalue", document.querySelector("#myInput").value);

            let csrfTokenValue = document.querySelector('[name=csrfmiddlewaretoken]').value;
            let request = new Request("{% url 'compute' %}", {
                method: 'POST',
                body: form,
                headers: { "X-CSRFToken": csrfTokenValue }
            })
            //-----------------------------------------------------------




            // Simple verification to check if field is empity
            if (numvalue == "") {
                document.getElementById('convertinput').style.display="none";
            }

            else {
                document.getElementById('convertinput').style.display="block";
            }
            //-----------------------------------------------------------

            //Geting the response from the backend to the frontend
            fetch(request)
                .then(response => response.json())
                .then(result => {
                    let binary_result = document.getElementById("myBin");
                    binary_result.innerHTML = result["result_of_binairy"];

                    let hexadec_result = document.getElementById("myHex");
                    hexadec_result.innerHTML = result["result_of_hexadec"];

                })
        })
//-----------------------------------------------------------
