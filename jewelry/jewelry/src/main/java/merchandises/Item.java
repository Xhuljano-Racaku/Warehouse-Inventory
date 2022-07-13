package merchandises;

public class Item {
	
	private int itemNumber;
	private String url;
	private String description;
	private String category;
	private double price;
	private String metal;
	
	
	@Override
	public String toString() {
		return "Item [itemNumber=" + itemNumber + ", url=" + url + ", description=" + description + ", category="
				+ category + ", price=" + price + ", metal=" + metal + "]";
	}


	public Item() {
		super();
	}
	
	
	public Item(String url, String description, String category, double price, String metal) {
		super();
		this.url = url;
		this.description = description;
		this.category = category;
		this.price = price;
		this.metal = metal;
	}


	public int getItemNumber() {
		return itemNumber;
	}
	public void setItemNumber(int itemNumber) {
		this.itemNumber = itemNumber;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getMetal() {
		return metal;
	}
	public void setMetal(String metal) {
		this.metal = metal;
	}
	
	
}
