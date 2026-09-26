const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

    const answer = question.nextElementSibling;

    // Hide answers when page first loads
    answer.style.display = "none";

    question.addEventListener("click", function() {

        if (answer.style.display === "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }

    });

});