public class Test {
    public static void main(String[] args) {
        float moyen = 0f;
        int i = 0;
        int j = 0;
        int len =0;
        if (args.length == 0) {
            System.out.println("Enter some arguments");
        } else {
               
                while (i < args.length) {
                    try {
                     int a = Integer.parseInt(args[i]);
                      moyen += a;
                     len++;
                    } catch (NumberFormatException e) {
                        
                        if (j == 0)
                        {
                            j = 1;
                            System.out.print("that not valid args =====>");
                        }
                        System.out.print(" " + args[i]);
                    }
                    i++;
                }
                if (j == 1)
                    System.out.print("\n");
                moyen /= len;
                System.out.println("Moyen ==> " + moyen);
        }
    }
}
