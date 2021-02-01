class UsersController < ApplicationController
  before_action :authorized, only: [:current_user]

  # REGISTER

  def index
    users = User.all
    render json: users 
  end

  def create
      @user = User.create(user_params)
      if @user.valid?
          token = encode_token({user_id: @user.id})
          render json: {success: true, user: @user, token: token}
      else
          render json: {success: false, error: @user.errors.messages}
      end
  end

  # LOGGING IN
  def login
      @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:password])
          token = encode_token({user_id: @user.id})
          render json: {success: true, user: @user, token: token}
      else
          render json: {success: false, error: "Invalid email address or password"}
      end
  end

  def current_user
      render json: @user
  end

  private

  def user_params
      params.permit(:name, :email, :password)
  end
end
