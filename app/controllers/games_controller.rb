require 'rest-client'
require 'json'



class GamesController < ApplicationController
  def new
    @letters = [*('A'..'Z')].sample(10)
  end

  def score
    @suggestion = params[:user_input]
    url = "https://wagon-dictionary.herokuapp.com/#{@suggestion}"
    response = RestClient.get(url)
    response2 = JSON.parse(response)
    letters = params[:letters]

    if included?(@suggestion, letters) && response2["found"] == true
      @message = "Congrats #{@suggestion} exists and gives you #{response2['length']} points!"
    elsif
      response2["found"] == false
      @message = "Sorry mate but this word doesn't exist"
    else
      @message = "Sorry but #{@suggestion} can not be made out of #{@letters}"
    end
  end

  def included?(word, letters)
    word.chars.all? { |letter| word.count(letter) <= letters.count(letter) }
  end
end



