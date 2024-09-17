terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.0.1"
    }
  }
}

provider "azurerm" {
  resource_provider_registrations = "none"
  subscription_id = "250ae9c3-6c33-4030-b72a-ed22fce22920"
  features {}
}

resource "azurerm_resource_group" "fuzari-mangebot-terraform-group" {
  name = "fuzari-mangebot-terraform-group"
  location = "eastus2"
}

resource "azurerm_service_plan" "fuzari-mangebot-sp" {
  name = "fuzari-mangebot-sp"
  resource_group_name = azurerm_resource_group.fuzari-mangebot-terraform-group.name
  location = azurerm_resource_group.fuzari-mangebot-terraform-group.location
  sku_name = "S1"
  os_type = "Windows"
}

resource "azurerm_windows_web_app" "fuzari-mangebot-app" {
  name = "fuzari-mangebot-app"
  resource_group_name = azurerm_resource_group.fuzari-mangebot-terraform-group.name
  location = azurerm_resource_group.fuzari-mangebot-terraform-group.location
  service_plan_id = azurerm_service_plan.fuzari-mangebot-sp.id
  site_config {
    always_on = false
  }
}

resource "azurerm_windows_web_app_slot" "fuzari-mangebot-terraform-app-slot-qa" {
  name = "fuzari-mangebot-terraform-app-slot-qa"
  app_service_id = azurerm_windows_web_app.fuzari-mangebot-app.id
  site_config { }
}
