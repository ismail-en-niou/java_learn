public class operations{
    public int bin_to_dic(int bin)
    {
        int res = 0;
        int i = 0;
        while (bin > 0) {
            res += (int) Math.pow(2, i) * (bin % 10);
            bin /= 10;
            i++;
        }
        return res;
    }
    public int oct_to_dic(int oct)
    {
        int res = 0;
        int i = 0;
        while (oct > 0) {
            res += (int) Math.pow(8, i) * (oct % 10);
            oct /= 10;
            i++;
        }
        return res;

    }
    public int hex_to_dic(int hex)
    {
        int res = 0;
        int i = 0;
        while (hex > 0) {
            res += (int) Math.pow(8, i) * (hex % 10);
            hex /= 10;
            i++;
        }
        return res;

    }
}