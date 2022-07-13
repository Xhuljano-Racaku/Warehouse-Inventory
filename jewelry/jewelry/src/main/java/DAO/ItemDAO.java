package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import merchandises.Item;

public class ItemDAO implements ItemDAOInterface, AutoCloseable {
	
	public static void main(String[] args) {
		try(ItemDAO dao = new ItemDAO()) {
			System.out.println("Connected");
		}catch (Exception e){
			System.out.println("Failed");
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
		
		return false;
	}

	@Override
	public List<Item> findAll() throws SQLException {
		
		return null;
	}

}

interface ItemDAOInterface {
	//Create
	public boolean save(Item item) throws SQLException;
	
	//get
	public List<Item> findAll() throws SQLException;
}