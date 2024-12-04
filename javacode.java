import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class SistemaUsuarios {
    // Datos de conexión
    private static final String URL = "jdbc:mysql://localhost:3306/sistema_usuarios";
    private static final String USER = "root"; // Cambia por tu usuario
    private static final String PASSWORD = ""; // Cambia por tu contraseña

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {
            System.out.println("Conexión exitosa a la base de datos.");

            // Insertar usuario
            String insertQuery = "INSERT INTO usuarios (nombre, correo, edad) VALUES (?, ?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(insertQuery)) {
                ps.setString(1, "Juan Pérez");
                ps.setString(2, "juan.perez@mail.com");
                ps.setInt(3, 28);
                ps.executeUpdate();
                System.out.println("Usuario insertado con éxito.");
            }

            // Leer usuarios
            String selectQuery = "SELECT * FROM usuarios";
            try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(selectQuery)) {
                System.out.println("Usuarios registrados:");
                while (rs.next()) {
                    System.out.printf("ID: %d, Nombre: %s, Correo: %s, Edad: %d%n",
                            rs.getInt("id"), rs.getString("nombre"),
                            rs.getString("correo"), rs.getInt("edad"));
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
