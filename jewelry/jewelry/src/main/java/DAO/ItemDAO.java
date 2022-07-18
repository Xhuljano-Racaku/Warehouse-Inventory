package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import merchandises.Item;

public class ItemDAO implements ItemDAOInterface, AutoCloseable {
	
	public static void main(String[] args) {
		try(ItemDAO dao = new ItemDAO()) {
			System.out.println(dao.findAll());
		}catch (Exception e){
			
			e.printStackTrace();
		}
	}
	
	private Connection connection;
	
	public ItemDAO() throws Exception {
		connect();
	}
	
	@Override
	public void close() throws Exception {
		if (connection != null && !connection.isClosed() ) {
			this.connection.close();
		}
		
	}
	
	public void connect() throws Exception {
		String url ="jdbc:mysql://localhost:3306/jewelry";
		String user ="root";
		String password = "gelo0614";
		
		//load driver
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		this.connection = DriverManager.getConnection(url, user, password);
	}
	@Override
	public boolean save(Item item) throws SQLException {
		String sql = "INSERT INTO ITEM(IMAGE, ITEM_DESCRIPTION, CATEGORY, PRICE, METAL) VALUES (?, ?, ?, ?, ?)";
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setString(1, item.getitemImage());
		statement.setString(2, item.getDescription());
		statement.setString(3, item.getCategory());
		statement.setDouble(4, item.getPrice());
		statement.setString(5, item.getMetal());
		int rows = statement.executeUpdate();
		return rows > 0 ? true: false;
	}

	@Override
	public List<Item> findAll() throws SQLException {
		String sql = "SELECT ITEM_NUMBER, IMAGE, ITEM_DESCRIPTION, CATEGORY, PRICE, METAL FROM ITEM";
		List<Item> results = new LinkedList<>();
		PreparedStatement stmt = connection.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while(rs.next()) {
			Item item = new Item(rs.getString("IMAGE"), rs.getString("ITEM_DESCRIPTION"), rs.getString("CATEGORY"), rs.getDouble("PRICE"), rs.getString("METAL"));
			item.setItemNumber(rs.getInt("ITEM_NUMBER"));
			results.add(item);
		}
		return results;
	}
	

	@Override
	public boolean update(Item item) throws SQLException {
		String sql = "UPDATE ITEM SET IMAGE = ?, ITEM_DESCRIPTION = ?, CATEGORY = ?, PRICE = ?, METAL = ? WHERE ITEM_NUMBER = ?";
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setString(1, item.getitemImage());
		statement.setString(2, item.getDescription());
		statement.setString(3, item.getCategory());
		statement.setDouble(4, item.getPrice());
		statement.setString(5, item.getMetal());
		statement.setInt(6, item.getItemNumber());
		return statement.executeUpdate() == 1;
	}

	@Override
	public boolean delete(Item item) throws SQLException {
		String sql = "DELETE FROM ITEM WHERE ITEM_NUMBER = ?";
		PreparedStatement statement = connection.prepareStatement(sql);
		statement.setInt(1, item.getItemNumber());
		return statement.executeUpdate() == 1;
	}

}

interface ItemDAOInterface {
	//Create
	public boolean save(Item item) throws SQLException;
	

	//get
	public List<Item> findAll() throws SQLException;
	
	// update
	public boolean update(Item itme) throws SQLException;
	
	//delete
	public boolean delete(Item item)throws SQLException;
}