class CompaniesController < ApplicationController
  def index
    @companies = Company.all
  end

  def show
    @company = Company.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
