provider "azurerm" {
  features {}

  subscription_id = "00000000-0000-0000-0000-000000000000"
  client_id       = "11111111-1111-1111-1111-111111111111"
  client_secret = "aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcd" 
  tenant_id       = "22222222-2222-2222-2222-222222222222"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "East US"
}
