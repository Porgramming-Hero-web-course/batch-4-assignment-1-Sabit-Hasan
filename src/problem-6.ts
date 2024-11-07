{
    // 
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    interface PartialProfile {
        name?: string;
        age?: number;
        email?: string;
    }

    const updateProfile = (profile: Profile, update: PartialProfile): Profile => {
        return { ...profile, ...update };
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(updateProfile(myProfile, { age: 26 }));

    // 
}