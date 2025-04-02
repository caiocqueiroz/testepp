provider "azurerm" {
  features {}

  subscription_id = "00000000-0000-0000-0000-000000000000"
  client_id       = "11111111-1111-1111-1111-111111111111"
  client_secret = " sv=2021-04-10&ss=b&srt=sco&sp=rwdlacupiytfx&se=2025-04-02T00:00:00Z&st=2025-04-01T00:00:00Z&spr=https&sig=abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdef" 
  tenant_id       = "22222222-2222-2222-2222-222222222222"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "East US"
}
