import java.util.function.Function;

public class main {
/*
    this is Function<Integer, Integer> is a functional interface from Java's java.util.function 
        syntaxe :
    Function <input type , output type>
*/
    public void appli(String number, Function<Integer, Integer> converter) {
        int num = Integer.parseInt(number);
        int result = converter.apply(num);
        System.out.println("Converted result: " + result);
    }

    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java main <base> <number>");
            return;
        }

        int base = Integer.parseInt(args[0]);
        int a = 1;
        while (a < args.length)
        {
            String number = args[a];

            operations op = new operations();
            main app = new main();

            if (base == 2) {
                app.appli(number, op::bin_to_dic);
            } else if (base == 8) {
                app.appli(number, op::oct_to_dic);
            } else if (base == 16) {
                app.appli(number, op::hex_to_dic);
            } else {
                System.out.println("Invalid base. Supported bases: 2, 8, 16.");
            }
            a++;
        }
        
    }
}
