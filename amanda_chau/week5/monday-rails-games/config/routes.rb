Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get "/games" => "pages#home"

get "/games/magic" => "magic#question"

get "/games/magic/answer" => "magic#answer"

get "/games/secret_number" => "secret#guess"

get "/games/secret_number/answer" => "secret#answer"

get "/games/rock_paper_scissors" => "prs#home"

get "/games/rock_paper_scissors/:throw" => "prs#throw"


end


# Games on Rails
# Games on Rails is a web application with three games
#
# Magic 8 Ball
# Secret Number
# Rock Paper Scissors
# Magic 8 Ball
#
# Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.
# Secret Number
#
# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
# Rock Paper Scissors
#
# Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
# Use params[:throw] as a user's choice
# Compare the 2! If users throw matches the apps throw, the user wins.
# i.e. If a user throws rock http://localhost:3000/games/rock_paper_scissors/rock and the server picks rock player wins! (Yes, I know that is not how RPS works) Bonus: Set the win or lose condition based on the real rules of Rock Paper Scissors.
