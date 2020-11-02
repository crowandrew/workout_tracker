$(".newWorkout").on("submit", function (event) {
        event.preventDefault();

        const newName = $("#name-input").val().trim();

        $.ajax({
            url: "/api/workouts",
            method: "POST",
            data: { name: newName }
        }).then(newWorkout => {
            console.log(newWorkout);
            location.reload();
        })
    })