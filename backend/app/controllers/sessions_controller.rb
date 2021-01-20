class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
        payload = {user_id: @user.id}
        token = JWT.encode(payload,'secretkey','HS256')
        render :json => {auth_key: token}
        else
            render :json => {msg: "Login failed, enter correct credentials"}
        end    
    end        
end
